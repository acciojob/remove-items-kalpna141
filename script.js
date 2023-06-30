//your JS code here. If required.
 function removeColor() {
      const colorSelect = document.getElementById('colorSelect');
      const selectedOption = colorSelect.options[colorSelect.selectedIndex];
      
      if (selectedOption) {
        colorSelect.remove(selectedOption.index);
      }
    }
