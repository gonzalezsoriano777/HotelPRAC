var HotelObject = {
    OccupiedRooms: '12',
    AvailableRoomsi: '8',
    AvailableRoomsi2: '8',
    Amentities: 'pool table',
    TotalRooms: '20',
    HeyBookRooma: 'Thanks for booking a room, check price',
    HaveBookaaaRoom: 'You have booked 1 room',
    CostofRoom: 'thats going to be 40$',
    
AvailableRoom: function(){
        return this.TotalRooms - this.OccupiedRooms;
    },

BookaRoom: function(){
    return this.HeyBookRooma;
},
    
WantaRoom: function(){
     return this.HaveBookaaaRoom + " & " + this.CostofRoom;
    }, 
    
 UnBookRoom: function(){
    this.AvailableRoomsi;
    this.AvailableRoomsi2--;
    console.log(" This is this many left " + this.AvailableRoomsi2 + " You just unbooked this is how many there is now " + this.AvailableRoomsi)
 }    
};