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
                        var music = new BABYLON.Sound("Music", "/public/Music/Cosmos.wav", scene, null, { loop: true, autoplay: true });
	
 

                        /////// Add and manipulate meshes in the scene


                        let carlsagan = BABYLON.MeshBuilder.CreateDisc("carlsagan", {radius: 100, arc: 0., tessellation: 12, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
                        carlsagan.position.y = 950
                        carlsagan.rotation.y = -1.55
                        carlsagan.rotation.x = 2
                        carlsaganpic = new BABYLON.StandardMaterial("carlsaganpic", scene);
                        carlsaganpic.emissiveTexture = new BABYLON.Texture("/public/Carl.jpeg", scene);
                        carlsagan.material = carlsaganpic

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

                        let venus = BABYLON.MeshBuilder.CreateSphere("venus",{diameter: 2.5}, scene);
                        venustexture = new BABYLON.StandardMaterial("venustexture", scene);
                        venustexture.emissiveTexture = new BABYLON.Texture("/public/VenusTexture.jpg", scene);
                        venus.material = venustexture
                        venus.position.x = 25
                        venus.parent = sun_mesh;


                        let earth = BABYLON.MeshBuilder.CreateSphere("earth",{diameter:3}, scene);
                        earth.position.x = 40
                        
                        earth.parent = sun_mesh;
                        let earthtexture = new BABYLON.StandardMaterial("earthtexture", scene);
                        earthtexture.emissiveTexture = new BABYLON.Texture("/public/earthtexture2.jpeg", scene); 
                        earth.material = earthtexture
                        earthtexture.emissiveTexture.scale

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
                        mars.parent = sun_mesh

                        let jupiter = BABYLON.MeshBuilder.CreateSphere("jupiter",{diameter:7}, scene);
                        jupiter.position.x = 70
                        jupitertexture = new BABYLON.StandardMaterial("jupitertexture", scene);
                        jupitertexture.emissiveTexture = new BABYLON.Texture("/public/JupiterTexture.jpg", scene);
                        jupiter.material = jupitertexture
                        jupiter.parent = sun_mesh

                        var saturn = BABYLON.MeshBuilder.CreateSphere("saturn", {diameter:5}, scene);
                        saturn.position.x = 85
                        saturntexture = new BABYLON.StandardMaterial("saturntexture", scene);
                        saturntexture.emissiveTexture = new BABYLON.Texture("/public/2k_saturn.jpg", scene);
                        saturn.material = saturntexture
                        saturn.parent = sun_mesh
                       
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
                        uranus.parent = sun_mesh

                        let neptune = BABYLON.MeshBuilder.CreateSphere("neptune",{diameter:5}, scene);
                        neptune.position.x = 115  
                        neptunetexture = new BABYLON.StandardMaterial("neptunetexture", scene);
                        neptunetexture.emissiveTexture = new BABYLON.Texture("/public/2k_neptune.jpg", scene);
                        neptune.material = neptunetexture
                        neptune.parent = sun_mesh 
                        
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
                                //sun.rotation.y += 0.0001;
                                jupiter.rotation.y += 0.001;
                                let pivot = earthmoon.position.negate();
                                earthmoon.rotateAround(pivot,BABYLON.Vector3.Up(), 0.01);                           
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