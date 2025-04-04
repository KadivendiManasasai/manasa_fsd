package com.oop.rooms;

public abstract class Room {
	
    protected String roomID;
    protected int roomNum;
    protected double roomFare;

    //param constrcutor
    public Room(String roomID, int roomNum, double roomFare) {
        this.roomID = roomID;
        this.roomNum = roomNum;
        this.roomFare = roomFare;
    }

    //getters and setters
    public String getRoomID() {
        return roomID;
    }
    public void setRoomID(String roomID) {
        this.roomID = roomID;
    }
    public int getRoomNum() {
        return roomNum;
    }
    public void setRoomNum(int roomNum) {
        this.roomNum = roomNum;
    }

    public double getRoomFare() {
        return roomFare;
    }
    public void setRoomFare(double roomFare) {
        this.roomFare = roomFare;
    }

    abstract void roomInfo(); //room information
}
