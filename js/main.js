            var canvas = document.getElementById("renderCanvas"); // Get the canvas element 

            var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine


            /******* Add the create scene function ******/
            var createScene = function () {

                        /////// Create the scene space
                        var scene = new BABYLON.Scene(engine);
                        scene.clearColor = BABYLON.Color3.Black();

                        
                        
                        /////// Add a camera to the scene and attach it to the canvas
                        //var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);
                        // camera.radius = 100;   
                        var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 32, 0), scene);
                        camera.setTarget(BABYLON.Vector3.Zero());  
                        camera.attachControl(canvas, true);            
                        
                        ////// Add light to the scene
                        //var point_light = new BABYLON.PointLight("point_light", new BABYLON.Vector3(0, 10, 0), scene); // Pointlight leave sun black if you remove BABYLON.Color3 from Sun 
                        //point_light.diffuse = new BABYLON.Color3(1,1,0.7); //added some color to light produced from sun    

                        

                        
                        //////Add Music
                        //var music = new BABYLON.Sound("Music", "/public/Music/Cosmos.wav", scene, null, { loop: true, autoplay: true });
	
 

                        /////// Add and manipulate meshes in the scene

                        /// Create new class for Pluto, it does not belong with planets....filthy little f-....get it done.
                        let pluto = BABYLON.MeshBuilder.CreateSphere("pluto",{diameter:1}, scene);
                        pluto.position.x = 150
                        pluto.rotation.y = 0
                        pluto.rotation.x = 0
                        plutotexture = new BABYLON.StandardMaterial("plutotexture", scene);
                        plutotexture.emissiveTexture = new BABYLON.VideoTexture("video",["/public/carlvideotext.mp4"], scene, true, true);
                        pluto.material = plutotexture;
                        

                       let sun_params = new Planet_params();
                       sun_params.diameter = 15;
                       let planet_sun = new Planet(sun_params,null,scene);                        
                       let sun_mesh = planet_sun.get_planet(); //BABYLON.MeshBuilder.CreateSphere("sun",{diameter: 15}, scene);                       
                      
                      
                       // Create a particle system
                        var surfaceParticles = new BABYLON.ParticleSystem("surfaceParticles", 1600, scene);
                        surfaceParticles.particleTexture = new BABYLON.Texture("/public/T_SunSurface.png", scene);
                        surfaceParticles.preWarmStepOffset = 10;
                        surfaceParticles.preWarmCycles = 100;
                        surfaceParticles.minInitialRotation = -2 * Math.PI;
                        surfaceParticles.maxInitialRotation = 2 * Math.PI;
                        var sunEmitter = new BABYLON.SphereParticleEmitter();
                        sunEmitter.radius = 7.5;
                        sunEmitter.radiusRange = 0;
                        surfaceParticles.emitter = sun_mesh; // the starting object, the emitter
                        surfaceParticles.particleEmitterType = sunEmitter;
                        surfaceParticles.addColorGradient(0, new BABYLON.Color4(0.8509, 0.4784, 0.1019, 0.0));
                        surfaceParticles.addColorGradient(0.4, new BABYLON.Color4(0.6259, 0.3056, 0.0619, 0.5));
                        surfaceParticles.addColorGradient(0.5, new BABYLON.Color4(0.6039, 0.2887, 0.0579, 0.5));
                        surfaceParticles.addColorGradient(1.0, new BABYLON.Color4(0.3207, 0.0713, 0.0075, 0.0));
                        surfaceParticles.minSize = 5;
                        surfaceParticles.maxSize = 5;
                        surfaceParticles.minLifeTime = 8.0;
                        surfaceParticles.maxLifeTime = 8.0;
                        surfaceParticles.emitRate = 200;
                        surfaceParticles.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
                        surfaceParticles.gravity = new BABYLON.Vector3(0, 0, 0);
                        surfaceParticles.minAngularSpeed = -0.4;
                        surfaceParticles.maxAngularSpeed = 0.4;
                        surfaceParticles.minEmitPower = 0;
                        surfaceParticles.maxEmitPower = 0;
                        surfaceParticles.updateSpeed = 0.006;
                        surfaceParticles.isBillboardBased = false;
                        surfaceParticles.start();

                        let mercury_params = new Planet_params();
                        mercury_params.diameter = 2;
                        mercury_params.texture_path = "/public/mercurytexture.jpg";
                        mercury_params.distance_from_parent = 10;
                        let mercury = new Planet(mercury_params,sun_mesh,scene);
                        mercury.set_orbit_enabled(); 

                        let venus_params = new Planet_params(); //= BABYLON.MeshBuilder.CreateSphere("venus",{diameter: 2.5}, scene);
                        venus_params.diameter = 2.5;
                        venus_params.texture_path = "/public/VenusTexture.jpg";
                        venus_params.distance_from_parent = 25;
                        let venus = new Planet(venus_params,sun_mesh,scene);
                        //venus.set_orbit_enabled();
                      
                        
                        let earth_params = new Planet_params();
                        earth_params.diameter = 3;
                        earth_params.texture_path = "/public/earthtexture2.jpeg";
                        earth_params.distance_from_parent = 0;
                        let earth = new Planet(earth_params,null,scene);
                        let earth_mesh = earth.get_planet();
                        earth_mesh.position.x = 55;
                        //earth.set_orbit_enabled();

                        let moon_params = new Planet_params();
                        moon_params.diameter = 1;
                        moon_params.texture_path = "/public/EarthMoonTexture.jpg";
                        moon_params.distance_from_parent = 3;
                        let moon = new Planet(moon_params,earth_mesh,scene);
                        
                        //moon.set_orbit_enabled();
                      
                      
                        let mars_params = new Planet_params();
                        mars_params.diameter = 1.8;
                        mars_params.texture_path = "/public/Mars-0.jpg";
                        mars_params.distance_from_parent = 55
                        let mars = new Planet(mars_params,sun_mesh,scene);
                        
                        
                        let jupiter_params = new Planet_params();
                        jupiter_params.diameter = 7
                        jupiter_params.texture_path = "/public/JupiterTexture.jpg";
                        jupiter_params.distance_from_parent = 70;
                        let jupiter = new Planet(jupiter_params,sun_mesh,scene);

                      
                        let saturn_params = new Planet_params();
                        saturn_params.diameter = 5
                        saturn_params.texture_path = "/public/2k_saturn.jpg";
                        saturn_params.distance_from_parent = 85;
                        let saturn = new Planet(saturn_params,sun_mesh,scene);
                        
                       
                        
                        let uranus_params = new Planet_params();
                        uranus_params.diameter = 5.5;
                        uranus_params.texture_path = "/public/2k_uranus.jpg";
                        uranus_params.distance_from_parent = 100;
                        let uranus = new Planet(uranus_params,sun_mesh,scene);
                       
                        let neptune_params = new Planet_params();
                        neptune_params.diameter = 5;
                        neptune_params.texture_path = "/public/2k_neptune.jpg";
                        neptune_params.distance_from_parent = 115;
                        let neptune = new Planet(neptune_params,sun_mesh,scene);
                       
                        
                        var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:2000.0}, scene);
                        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
                        skyboxMaterial.backFaceCulling = false;
                        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/public/textures/skybox", scene);
                        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
                        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
                        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
                        skybox.material = skyboxMaterial;
                        
                        
                         
                                                

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