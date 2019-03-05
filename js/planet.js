class Moon {
    constructor(){
        this.diameter = 1;
        this.texture_path = null;
        this.distance_from_parent = 5;
        this.orbit_speed = 0.01
    }
}

class Planet_params {
    constructor(){
        this.diameter = 10;
        this.texture_path = null;
        this.distance_from_parent = 20;   
        this.orbit_speed = 0.01 
    }
}


class Planet {

    constructor(planet_params, parent, scene){
        this.planet_params = planet_params;
        this.parent = parent;              
        this.scene = scene;
        this.create_planet();
    }

    create_planet(){
        let scene = this.scene;
        this.planet_mesh = BABYLON.MeshBuilder.CreateSphere("A Planet",{diameter:this.planet_params.diameter}, scene);

        let distance_from_parent = this.planet_params.distance_from_parent;
        if(distance_from_parent){
            this.planet_mesh.position.x = distance_from_parent;
        }

        if(this.parent){
            this.planet_mesh.parent = this.parent;
        }

        if(this.planet_params.texture_path){
            this.material = new BABYLON.StandardMaterial("A Planet Material", scene);
            this.texture = new BABYLON.Texture(this.planet_params.texture_path, scene);
            this.material.emissiveTexture = this.texture;
            this.planet_mesh.material = this.material;
        }
    }

    get_planet_mesh(){
        return this.planet_mesh;
    }
    rotate_planet(){
        let scene = this.scene;
        let planet_mesh = this.planet_mesh;
        scene.registerBeforeRender(function (){
            planet_mesh.rotation.y += 0.01




        }
        
    );
         
    }
    set_orbit_enabled(){

        if(!this.parent){
            return;
        }
    
        let scene = this.scene;
        let planet_mesh = this.planet_mesh;
        let distance_from_parent = this.planet_params.distance_from_parent;
        let orbit_speed = this.planet_params.orbit_speed;

        scene.registerBeforeRender(function () {
            let pivot = planet_mesh.position.negate();            
            planet_mesh.rotateAround(pivot,BABYLON.Vector3.Up(), orbit_speed);
            
            let new_length = planet_mesh.position.length(); 
            planet_mesh.position = planet_mesh.position.scale(distance_from_parent/new_length);
            
        });
    }


}