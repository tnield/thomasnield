export function Experience(){
    return(
        <main>
             <div className="grid grid-cols-2 text-center justify-between p-5">
                <div className="mx-8">
                    <img
                        src="/self.jpg"
                        width = "5000"
                        height= "5000"
                        className ="rounded"
                        alt="Picture of the author"
                    />
                </div>
                <div className="text-center">
                    <h1 className={`text-6xl font-large mt-4`}>
                        About
                    </h1>
                    <div className="text-left">
                        <p className="mt-4 ml-5 text-4xl">
                            <br></br>
                            - Located in Springfield, Missouri
                            <br></br>
                            <br></br>
                            - Born and raised in Jefferson City, Missouri
                            <br></br>
                            <br></br>
                            - Former collegiate athele, running Cross Country and Indoor and Outdoor track
                            <br></br>
                            <br></br>
                            - Eagle Scout 08/18/21
                        </p>

                    </div>
                </div>
            </div>
        </main>
    )
}