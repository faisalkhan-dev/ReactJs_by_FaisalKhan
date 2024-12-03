import React from 'react'

// function Card(props) {
//   console.log(props.username)  We can write as this also

function Card({username="Arbaz Khan",btnText}) {  //destructuring
  const displayUsername = username || "Arbaz Khan";
  console.log(username)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Image */}
      <img
        className="w-full"
        src="https://via.placeholder.com/400x200"
        alt="Placeholder"
      />

      {/* Content */}
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">Card Title</h2>
        <p className="text-gray-700 text-base">
          This is a simple card component with an image, a title, and some text
          content. You can customize it as per your needs.<br/>{btnText}
        </p>
      </div>

      {/* Footer */}
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More {username}

          {/* {username ||"Arbaz Khan" } 
          it means if username passed ,show username otherwise default value i.e Arbaz Khan */}

        </button>
      </div>
    </div>
  )
}

export default Card