document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
  
    if (!file) {
      alert('Por favor, selecione um arquivo!');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await axios.post('/upload', formData, {
        responseType: 'blob'
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const downloadLink = document.getElementById('downloadLink');
      downloadLink.href = url;
      downloadLink.setAttribute('download', 'adjusted-file.txt');
      downloadLink.style.display = 'block';
      downloadLink.textContent = 'Download Adjusted File';
    } catch (error) {
      console.error('Erro ao fazer upload do arquivo:', error);
      alert('Erro ao fazer upload do arquivo. Veja o console para mais detalhes.');
    }
  });
