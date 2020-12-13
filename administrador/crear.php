<form id="crear" onsubmit="crear(); return false;">
   <div class="form-group">
      <label for="nombre">Nombre</label>
      <input type="text" class="form-control" id="nombre" placeholder="Torta de Chocolate" required>
   </div>
   <div class="form-group">
      <label for="precio">Precio</label>
      <input type="text" class="form-control" id="precio" placeholder="3.00" required>
   </div>
   <div class="form-group">
      <label for="stock">Stock</label>
      <input type="text" class="form-control" id="stock" placeholder="46" required>
   </div>
   <div class="form-group">
     <label for="img" class="negrita">Imagen</label>
     <div class="custom-file">
        <input type="file" class="custom-file-input" id="img" accept=".jpg, .jpeg, .png, .svg, .webm" onchange="readFiles(event);">
        <label class="custom-file-label" for="customFile">Selecciona una Imagen</label>
     </div>
   </div>
   <button type="submit" class="btn btn-primary">Aceptar</button>
</form>