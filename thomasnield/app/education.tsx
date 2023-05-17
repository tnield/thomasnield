export function Education(){
    return(
        <main>
            <div className="grid grid-cols-2 text-center justify-between p-5">
                <div className="text-center">
                        <h1 className={`text-6xl font-large mt-4`}>
                            Education
                        </h1>
                        <div className="text-center">
                            <p className="mt-4 ml-5 text-3xl">
                                <br></br>
                                Drury University, Springfield Missouri
                                <br></br>
                                <br></br>
                                Major :: Computer Science - Software Engineering
                                <br></br>
                                <br></br>
                                Minors :: Math & Cyber Risk Management
                                <br></br>
                                <br></br>
                                GPA :: 3.63
                            </p>

                        </div>
                    </div>
                <div className="mx-8">
                    <a href="https://www.drury.edu">
                       <img
                        src="/DU.jpg"
                        width = "5000"
                        height= "5000"
                        className ="rounded"
                        alt="Drury University Picture"
                        /> 
                    </a>
                </div>
            </div>
        </main>
    )
}