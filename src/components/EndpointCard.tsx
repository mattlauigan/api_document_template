import { useEffect } from "react";
import type { Request } from "../types";

interface EndpointCardProps {
  request: Request;
}

export function EndpointCard({ request }: EndpointCardProps) {
  useEffect(() => {
    console.log("asldkjalsjkdjlk ", request);
  });

  const methodColors = {
    GET: "bg-green-100 text-green-800",
    POST: "bg-blue-100 text-blue-800",
    PUT: "bg-yellow-100 text-yellow-800",
    DELETE: "bg-red-100 text-red-800",
    PATCH: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6">
      <div className="flex items-center space-x-4 mb-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            methodColors[request.method]
          }`}
        >
          {request.method}
        </span>
        <code className="text-sm bg-gray-100 px-3 py-1 rounded">
          {request.path}
        </code>
      </div>

      <p className="text-gray-600 mb-6">{request.description}</p>

      {request.parameters && request.parameters.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Parameters</h4>
          <div className="bg-gray-50 rounded-lg p-4">
            {request.parameters.map((param) => (
              <div key={param.name} className="mb-3 last:mb-0">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">
                    {param.name}
                  </span>
                  <span className="text-xs text-gray-500">{param.type}</span>
                  {param.required && (
                    <span className="text-xs text-red-600">Required</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {param.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h4 className="text-sm font-medium text-gray-900 mb-3">Responses</h4>
        {request.responses.map((response) => (
          <div key={response.status} className="mb-4 last:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-medium text-gray-900">
                Status: {response.status}
              </span>
              <span className="text-sm text-gray-600">
                {response.description}
              </span>
            </div>
            <pre className="bg-indigo-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-12">
              <code>{JSON.stringify(response.example, null, 2)}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
