const urlInput = document.getElementById('url')
const downloadButton = document.getElementById('download')

downloadButton.addEventListener('click', () => {
  const url = urlInput.value
  const downloadUrl = `https://youtube-video-download-api-211d.onrender.com/download?url=${url}`
  window.open(downloadUrl)
})