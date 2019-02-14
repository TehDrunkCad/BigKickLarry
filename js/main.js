
            var canvas = document.getElementById("renderCanvas"); // Get the canvas element 

            var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine


            /******* Add the create scene function ******/
            var createScene = function () {

                        // Create the scene space
                        var scene = new BABYLON.Scene(engine);
                        scene.clearColor = BABYLON.Color3.Black();
                        
                        // Add a camera to the scene and attach it to the canvas
                        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);
                        camera.attachControl(canvas, true);
                        camera.radius = 100;                      
                        
                        // Add light to the scene
                        var point_light = new BABYLON.PointLight("point_light", new BABYLON.Vector3(0, 0, 0), scene); // Pointlight leave sun black if you remove BABYLON.Color3 from Sun 
                        point_light.diffuse = new BABYLON.Color3(1,1,0.7); //added some color to light produced from sun                       

                        // Add and manipulate meshes in the scene
                        
                        let sun = BABYLON.MeshBuilder.CreateSphere("sun",{diameter: 15}, scene);                       
                        var suncolor = new BABYLON.StandardMaterial("suncolor", scene);
                        suncolor.alpha = 0.99;//**alpha on material
                        suncolor.emissiveColor = new BABYLON.Color3(1, 1, 0);
                        sun.material = suncolor;
                        
                        
                        let mercury = BABYLON.MeshBuilder.CreateSphere("mercury",{diameter:2}, scene);
                        mercury.position.x = 10
                        mercury.parent = sun

                        let venus = BABYLON.MeshBuilder.CreateSphere("venus",{diameter: 2.5}, scene);
                        venus.position.x = 25
                        venus.parent = sun


                        let earth = BABYLON.MeshBuilder.CreateSphere("earth",{diameter:3}, scene);
                        earth.position.x = 40
                       // earth.rotation.y = Math.PY/2; ERROR
                        earth.parent = sun
                        earthtexture = new BABYLON.StandardMaterial("earthtexture", scene);
                        earthtexture.ambientTexture = new BABYLON.Texture("/public/earth_texture.jpg", scene); 
                        earth.material = earthtexture

                        let earthmoon = BABYLON.MeshBuilder.CreateSphere("earthmoon",{diameter:1}, scene);
                        earthmoon.position.x = 3
                        earthmoon.position.y = 1
                        earthmoon.parent = earth

                        let mars = BABYLON.MeshBuilder.CreateSphere("mars",{diameter:1.8}, scene);
                        mars.position.x = 55
                        mars.parent = sun

                        let jupiter = BABYLON.MeshBuilder.CreateSphere("jupiter",{diameter:7}, scene);
                        jupiter.position.x = 70
                        jupiter.parent = sun

                        var saturn = BABYLON.MeshBuilder.CreateSphere("saturn", {diameter:5}, scene);
                        saturn.position.x = 85
                        saturn.parent = sun
                        let saturnring = BABYLON.MeshBuilder.CreateTorus("saturnring",{diameter:10}, scene);
                        saturnring.position.x = 0
                        saturnring.parent = saturn

                        let uranus = BABYLON.MeshBuilder.CreateSphere("uranus",{diameter:5.5}, scene);
                        uranus.position.x = 100
                        uranus.parent = sun

                        let neptune = BABYLON.MeshBuilder.CreateSphere("neptune",{diameter:5}, scene);
                        neptune.position.x = 115  
                        neptune.parent = sun 
                        
                        var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:2000.0}, scene);
                        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
                        skyboxMaterial.backFaceCulling = false;
                        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/public/textures/skybox", scene);
                        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
                        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
                        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                        skybox.material = skyboxMaterial;
                        

                         //Conflict with parent 'sun' and the rest of the meshes and earth moon with parent earth
                        scene.registerBeforeRender(function () {
                                earth.rotation.y += 0.001;
                                //sun.rotation.y += 0.001;
                            });
                                                

                        return scene;
                };

                /******* End of the create scene function ******/    

                var scene = createScene(); //Call the createScene function

            engine.runRenderLoop(function () { // Register a render loop to repeatedly render the scene
                    scene.render();
            });


            window.addEventListener("resize", function () { // Watch for browser/canvas resize events
                    engine.resize();
            });