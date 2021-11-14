<!-- Modal -->
<div class="modal fade" id="editUserModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Izmjena korisnika</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
      <form action="./update_user.php" method="POST">
          <div class="row">

              <div>
                <input type="hidden" name="id" id="hidden_input">
              </div>
              <div class="col-12">
                  <input type="text" name="first_name" id="editModalFirstName" class="form-control" placeholder="Unesite ime">
              </div>
              <div class="col-12 mt-3">
                  <input type="text" name="last_name" id="editModalLastName" class="form-control" placeholder="Unesite prezime">
              </div>
              <div class="col-12 mt-3">
                  <input type="email" name="email" id="editModalEmail" class="form-control" placeholder="Unesite e-mail adresu">
              </div>
              <div class="col-12 mt-3">
                        <select name="country" id="country_drop_menu_edit" class="form-select" onchange=cities_change(value,"cities_drop_menu_edit")>
                             <?php
                                $file_content = file_get_contents("countries.txt");
                                $decoded_contents = json_decode($file_content,true);
                                foreach($decoded_contents as $korisnik){
                                echo "<option value=".$korisnik['name'].">".$korisnik['name']."</option>";
                                 }
                            ?>
                         </select>
                    </div>
                    <div class="col-12 mt-3">
                         <select name="city" id="cities_drop_menu_edit" class="form-control">
                    
                            </select>
                 
                    </div>
          </div>

          <div class="row mt-3">
              <div class="col-4 offset-4">
                  <button class="btn btn-success w-100">Dodaj korisnika</button>
              </div>
          </div>
      </form>

      </div>
    </div>
  </div>
</div>