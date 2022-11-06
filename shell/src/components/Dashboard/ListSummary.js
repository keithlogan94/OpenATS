import List from "./List"

export default (props) => {
    return (
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">

        <div className="text-left">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900 text-left">{ props.title }</h1>
            <p className="mt-2 text-sm text-gray-700">
              { props.description }
            </p>
          </div>
          
        </div>

          <List />
      </div>
    )
  }
  