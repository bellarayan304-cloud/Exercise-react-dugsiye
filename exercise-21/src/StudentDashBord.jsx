function StudentDashBord() {
    const DhashBord = ['avrage Grade', 'courses', 'Study Hours', 'Assigment'];

    const Course = [
        {
            id: 1, name: "react fundamentals", pesentage: 75,
            introductin: "sarah wilson",
            progress: "Next: Component & props"

        },
        {
            id: 2, name: "Javascript Advance", pesentage: 45,
            introductin: "mike johnson",
            progress: "Next: Async/Await "

        },
        {
            id: 1, name: "Ul/UX  Desing", pesentage: 90,
            introductin: "Emily chen",
            progress: "Next: color & Theory"

        }
    ]
    const Assigment = [
        {
            id: 1, name: "react fundamentals", massege: "react fundamentals",
            status: "pending",
            date: "due 2024-03-20"

        },
        {
            id: 2, name: "API Integration", massege: "JavaScript Advance",
            status: "completed",
            date: "due 2024-03-18"

        },
        {
            id: 3, name: "Desing System", massege: "Ul/UX Desing",
            status: "in-progress",
            date: "due 2024-03-25"

        }
    ]
    const AnnounCement = [
        {
            id: 1, title:"New course Available", massege: "Check out our new typescript course", time:'2 hour ago',
        },
        {
              id: 1, title:"Maintenance Notice", massege: "Platform Updates scheduled for to night", time:'5hour ago'
        }
          
           

        
    ]
    const State = [

        { label: 'Avrage-Grade', value: '88%', icon: '📊' },
        { label: 'Coueses', value: '3', icon: '📚' },
        { label: 'Study', value: '45h', icon: '⏰' },
        { label: 'Assigment', value: '12', icon: '✍️' }




    ]

    return (
        <div className="min-h-screen bg-gray-50 py-5 px-4">
            {/* Header */}
            <div className="flex justify-between bg-gray-100 rounded-2xl py-4 px-2 m-8 shadow ">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Welcome back,student!</h1>
                    <span className="text-sm text-gray-500">Here'what's happening with your courses today</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <span className=" text-2xl">🔔</span>
                    <span className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-semibold">S</span>
                </div>

            </div>
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

                {
                    State.map(State => (
                        <div className="bg-white shadow  rounded-2xl  mb-5 py-6 px-6">
                            <div className="">
                                 <span className="text-gray-500 text-base " >{State.label}</span>
                                  <div className="flex items-center">
                                    <span className="text-2xl mr-4">{State.icon}</span>
                                 </div>
                                 <div>
                                    <span className="font-bold text-xl">{State.value}</span>
                                 </div>
                                
                            </div>
                       

                        </div>
                    ))
                }
            </div>

            {/* coure */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  ">
                 <div className="lg:col-span-2">
              
                <div className="bg-white shadow-xl rounded-2xl py-10 px-4 mb-4  ">
                <h1 className="text-lg font-bold  ">Course Progress</h1>
                {
                    
                    Course.map((Course)=>(

                        <div key={Course.id} className=" bg-gray-100  py-6 px-2 rounded-2xl mb-5 shadow">
                            
                            <div className="flex justify-between capitalize">
                            <span className="font-semibold mb-2 text-xl">{Course.name}</span>
                            <span className="text-gray-500 text-bse">{Course.pesentage}%</span>
                        </div>
                          <div className="w-full bg-gray-300 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-${Course.color}-500`}
                        style={{ width: `${Course.progress}%` }}
                      ></div>
                    </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500 text-sm">{Course.progress}</span>
                            <span className="text-gray-500 text-base">{Course.introductin}</span>
                        </div>

                        

                        </div> 
                    ))
                    
                }
                </div>
                </div>
                

                {/* Assigment */}
                  <div className="space-y-4">
                <div className="bg-white shadow-2xl py-4 px-5 rounded-2xl">
                    <h1 className="text-2xl font-bold mb-4">upcoming assigment</h1>
                    {
                        Assigment.map((Assigment)=>(
                            <div key={Assigment.id} className="">
                                <div className="flex justify-between">
                                    <span className="text-xl font-semibold capitalize">{Assigment.name}</span>
                                    <span className="bg-red-200
                                    px-3 rounded-full text-lg text-red-950 font-medium capitalize ">{Assigment.status}</span>
                                </div>
                                <div className="flex justify-between mb-6">
                                    <span className="text-base text-gray-600">{Assigment.massege}</span>
                                    <span>{Assigment.date}</span>
                                </div>
                            </div>
                        ))

                    }
                </div>
                {/* AnnounCement */}
                <div className="bg-white shadow-2xl mt-4 p-6 rounded-2xl ">
                    <h1 className="font-bold mb-4 text-2xl ">AnnounCement</h1>
                     <div className="space-y-3">
                {
                    AnnounCement.map((AnnounCement)=>(
                        <div key={AnnounCement.id}  className="border-l-4  border-blue-500 p-2 ">
                            <div >
                                <p className="font-semibold text-lg ">{AnnounCement.title}</p>
                                <div>
                                <p className="text-gray-600">{AnnounCement.massege}</p>
                                </div>

                                <div>
                                <span className="text-gray-600  ">{AnnounCement.time}</span>
                                </div>
                            </div>

                        </div>
                    ))
                    }
                    </div>

                </div>
                </div>


        </div>
        </div>
    )
}
export default StudentDashBord;