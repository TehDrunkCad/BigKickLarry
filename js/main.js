
            var canvas = document.getElementById("renderCanvas"); // Get the canvas element 

            var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine


            /******* Add the create scene function ******/
            var createScene = function () {

                        // Create the scene space
                        var scene = new BABYLON.Scene(engine);
                        scene.clearColor = BABYLON.Color3.Black();
                        
                        /////// Add a camera to the scene and attach it to the canvas
                        //var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);
                        // camera.radius = 100;   
                        var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 32, 0), scene);
                        camera.setTarget(BABYLON.Vector3.Zero());  
                        camera.attachControl(canvas, true);            
                        
                        // Add light to the scene
                        //var point_light = new BABYLON.PointLight("point_light", new BABYLON.Vector3(0, 10, 0), scene); // Pointlight leave sun black if you remove BABYLON.Color3 from Sun 
                        //point_light.diffuse = new BABYLON.Color3(1,1,0.7); //added some color to light produced from sun    
                        
                        //Add Music
                        var music = new BABYLON.Sound("Music", "/public/Music/Cosmos.wav", scene, null, { loop: true, autoplay: true });
	
 

                        // Add and manipulate meshes in the scene

                        let carlsagan = BABYLON.MeshBuilder.CreateBox("carlsagan",{size:10}, scene);
                        carlsagan.position.y = 20
                        carlsagan.rotation.y = -1.55
                        carlsaganpic = new BABYLON.StandardMaterial("carlsaganpic", scene);
                        carlsaganpic.emissiveTexture = new BABYLON.Texture("/public/Carl.jpeg", scene);
                        carlsagan.material = carlsaganpic
                        
                        let sun = BABYLON.MeshBuilder.CreateSphere("sun",{diameter: 15}, scene);                       
                        //var suncolor = new BABYLON.StandardMaterial("suncolor", scene);
                        //suncolor.alpha = 0.99;//**alpha on material
                        //suncolor.emissiveColor = new BABYLON.Color3(1, 1, 0);
                        //sun.material = suncolor;
                        suntexture = new BABYLON.StandardMaterial("suntexture", scene);
                        suntexture.alpha = 0.99;
                        suntexture.emissiveTexture = new BABYLON.Texture("/public/2k_sun.jpg", scene);
                        sun.material = suntexture
                        
                        
                        let mercury = BABYLON.MeshBuilder.CreateSphere("mercury",{diameter:2}, scene);
                        mercury.position.x = 10
                        mercurytexture = new BABYLON.StandardMaterial("mercurytexture", scene);
                        mercurytexture.emissiveTexture = new BABYLON.Texture("/public/mercurytexture.jpg", scene);
                        mercury.material = mercurytexture
                        mercury.parent = sun

                        let venus = BABYLON.MeshBuilder.CreateSphere("venus",{diameter: 2.5}, scene);
                        venustexture = new BABYLON.StandardMaterial("venustexture", scene);
                        venustexture.emissiveTexture = new BABYLON.Texture("/public/VenusTexture.jpg", scene);
                        venus.material = venustexture
                        venus.position.x = 25
                        venus.parent = sun


                        let earth = BABYLON.MeshBuilder.CreateSphere("earth",{diameter:3}, scene);
                        earth.position.x = 40
                        
                        earth.parent = sun
                        earthtexture = new BABYLON.StandardMaterial("earthtexture", scene);
                        earthtexture.emissiveTexture = new BABYLON.Texture("/public/earthtexture2.jpeg", scene); 
                        earth.material = earthtexture

                        let earthmoon = BABYLON.MeshBuilder.CreateSphere("earthmoon",{diameter:1}, scene);
                        earthmoontexture = new BABYLON.StandardMaterial("earthmoontexture", scene);
                        earthmoontexture.emissiveTexture = new BABYLON.Texture("/public/EarthMoonTexture.jpg", scene);
                        earthmoon.material = earthmoontexture
                        earthmoon.position.x = 3
                        earthmoon.position.y = 1
                        earthmoon.parent = earth

                        let mars = BABYLON.MeshBuilder.CreateSphere("mars",{diameter:1.8}, scene);
                        mars.position.x = 55
                        marstexture = new BABYLON.StandardMaterial("marstexture", scene);
                        marstexture.emissiveTexture = new BABYLON.Texture("/public/Mars-0.jpg", scene);
                        mars.material = marstexture
                        mars.parent = sun

                        let jupiter = BABYLON.MeshBuilder.CreateSphere("jupiter",{diameter:7}, scene);
                        jupiter.position.x = 70
                        jupitertexture = new BABYLON.StandardMaterial("jupitertexture", scene);
                        jupitertexture.emissiveTexture = new BABYLON.Texture("/public/JupiterTexture.jpg", scene);
                        jupiter.material = jupitertexture
                        jupiter.parent = sun

                        var saturn = BABYLON.MeshBuilder.CreateSphere("saturn", {diameter:5}, scene);
                        saturn.position.x = 85
                        saturntexture = new BABYLON.StandardMaterial("saturntexture", scene);
                        saturntexture.emissiveTexture = new BABYLON.Texture("/public/2k_saturn.jpg", scene);
                        saturn.material = saturntexture
                        saturn.parent = sun
                       
                        let saturnring = BABYLON.MeshBuilder.CreateTorus("saturnring",{diameter:10}, scene);
                        saturnring.position.x = 0
                        saturnringtexture = new BABYLON.StandardMaterial("saturnringtexture", scene);
                        saturnringtexture.emissiveTexture = new BABYLON.Texture("/public/SaturnRing.png", scene);
                        saturnring.material = saturnringtexture
                        saturnring.parent = saturn

                        let uranus = BABYLON.MeshBuilder.CreateSphere("uranus",{diameter:5.5}, scene);
                        uranus.position.x = 100
                        uranustexture = new BABYLON.StandardMaterial("uranustexture", scene);
                        uranustexture.emissiveTexture = new BABYLON.Texture("/public/2k_uranus.jpg", scene);
                        uranus.material = uranustexture
                        uranus.parent = sun

                        let neptune = BABYLON.MeshBuilder.CreateSphere("neptune",{diameter:5}, scene);
                        neptune.position.x = 115  
                        neptunetexture = new BABYLON.StandardMaterial("neptunetexture", scene);
                        neptunetexture.emissiveTexture = new BABYLON.Texture("/public/2k_neptune.jpg", scene);
                        neptune.material = neptunetexture
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
                                mars.rotation.y += 0.001;
                                sun.rotation.y += 0.0001;
                                jupiter.rotation.y += 0.001;
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