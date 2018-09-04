
            var canvas = document.getElementById("renderCanvas"); // Get the canvas element 

            var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine


            /******* Add the create scene function ******/
            var createScene = function () {

                        // Create the scene space
                        var scene = new BABYLON.Scene(engine);
                        
                        // Add a camera to the scene and attach it to the canvas
                        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);
                        camera.attachControl(canvas, true);                        
                        
                        // Add light to the scene
                        var light1 = new BABYLON.PointLight("light1", new BABYLON.Vector3(0, 0, 0), scene); // Pointlight leave sun black if you remove BABYLON.Color3 from Sun              

                        // Add and manipulate meshes in the scene
                        
                        let Sun = BABYLON.MeshBuilder.CreateSphere("Sun",{diameter: 15}, scene);
                        Sun.alpha = 0.0 // Tried to make Sun transparent but didn't work, no conflict with material
                        var Suncolor = new BABYLON.StandardMaterial("Suncolor", scene);
                        Suncolor.alpha = 0.5;//**alpha on material
                        Suncolor.emissiveColor = new BABYLON.Color3(1, 1, 0);
                        Sun.material = Suncolor;
                        
                        let Mercury = BABYLON.MeshBuilder.CreateSphere("Mercury",{diameter:2}, scene);
                        Mercury.position.x = 10

                        let Venus = BABYLON.MeshBuilder.CreateSphere("Venus",{diameter: 2.5}, scene);
                        Venus.position.x = 25

                        let Earth = BABYLON.MeshBuilder.CreateSphere("Earth",{diameter:3}, scene);
                        Earth.position.x = 40
                        Earthtexture = new BABYLON.StandardMaterial("Earthtexture", scene);
                        Earthtexture.ambientTexture = new BABYLON.Texture("/public/earth_texture.jpg", scene); // How do I give BABYLON a path to saved .png file? Or how do I upload it into its database?
                        Earth.material = Earthtexture

                        let Earthmoon = BABYLON.MeshBuilder.CreateSphere("Earthmoon",{diameter:1}, scene);
                        Earthmoon.position.x = 43
                        Earthmoon.position.y = 1

                        let Mars = BABYLON.MeshBuilder.CreateSphere("Mars",{diameter:1.8}, scene);
                        Mars.position.x = 55

                        let Jupiter = BABYLON.MeshBuilder.CreateSphere("Jupiter",{diameter:7}, scene);
                        Jupiter.position.x = 70

                        var Saturn = BABYLON.MeshBuilder.CreateSphere("Saturn", {diameter:5}, scene);
                        Saturn.position.x = 85
                        let Saturnring = BABYLON.MeshBuilder.CreateTorus("Saturnring",{diameter:10}, scene);
                        Saturnring.position.x = 85

                        let Uranus = BABYLON.MeshBuilder.CreateSphere("Uranus",{diameter:5.5}, scene);
                        Uranus.position.x = 100

                        let Neptune = BABYLON.MeshBuilder.CreateSphere("Neptune",{diameter:5}, scene);
                        Neptune.position.x = 115                                               
                        


                        

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