import { createServer } from "miragejs"
export default class MockAPI{

    window: any

    constructor(_window: Window= window) {
        console.log("_window", "Window")
        this.window = _window
    }


    start(){
        this.window.server = createServer({
            routes() {
              this.get("/api/movies", () => {
                return {
                  movies: [
                    { id: 1, name: "Inception", year: 2010 },
                    { id: 2, name: "Interstellar", year: 2014 },
                    { id: 3, name: "Dunkirk", year: 2017 },
                  ],
                }
              })

              this.post("/api/login", () => {
                return {
                  succeeded: true
                }
              })

            },
          })
    }

    stop(){
      if(this.window)
        this.window.shutdown()
    }

}