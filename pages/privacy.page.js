export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              You can view our privacy policy using the embedded PDF viewer below or download it directly.
            </p>
            
            <div className="flex gap-4 mb-6">
              <a
                href="/privacy.pdf"
                download
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Download PDF
              </a>
              <a
                href="/privacy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
              >
                Open in New Tab
              </a>
            </div>
          </div>
          
          {/* Embedded PDF viewer */}
          <div className="w-full h-screen border border-gray-300 rounded">
            <iframe
              src="/privacy.pdf"
              width="100%"
              height="100%"
              title="Privacy Policy PDF"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}