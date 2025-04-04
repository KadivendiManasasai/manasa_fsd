import java.util.Scanner;

public class LibraryManagementSystem {

	public static int max_books=100;
	
	public String book_title[]=new String[max_books];
	public String book_author[]=new String[max_books];
	
	public int book_count=0;
	
	public Scanner sc=new Scanner(System.in);
	
	public static void main(String[] args) {
		LibraryManagementSystem lib=new LibraryManagementSystem();
		lib.run();
	}
	
	
	public void run() {
		while (true) {
			System.out.println("\nLibrary Management System:");
			System.out.println("\n1. Add a new Book");
			System.out.println("\n2. Search for a Book by Title");
			System.out.println("\n3. Display all Books");
			System.out.println("\n4. Remove a Book by Title");
			System.out.println("\n5. Exit");
			System.out.println("\nChoose an option:");
			
			int choice = sc.nextInt();
			sc.nextLine();
			
			switch(choice) {
			case 1:
				addbook();
				break;
				
			case 2:
				search();
				break;
				
			case 3:
				display();
				break;
			
			case 4:
				remove();
				break;
				
			case 5:
				System.out.println("Exiting System...");
				return;
				
			default:
				System.out.println("Invalid option! Try again..");
			}
		
			
		}
	}
	
	public void addbook() {
	
		if(book_count==max_books) {
			System.out.println("Library is full..you can't add new book!");
			return;
		}
		 
		System.out.println("Enter a book_title:");
		String title= sc.nextLine();
		
		System.out.println("Enter Author name:");
		String author=sc.nextLine();
		
		book_title[book_count]=title;
		book_author[book_count]=author;
		book_count++;
		
		System.out.println("Book added successfully...");
		
	}
	
	public void search() {
		System.out.println("Enter the book_title to search: ");
		String title= sc.nextLine();
		
		for(int i=0;i<book_count;i++) {
			if(book_title[i].equalsIgnoreCase(title)) {
				System.out.println("Book found..");
				System.out.println("Title: "+book_title[i]);
				System.out.println("Author: "+book_author[i]);
				return;
			}
		}
	}
	 
	public void display() {
		if(book_count==0) {
			System.err.println("No books in the Library...");
			return;
		}
		System.out.println("Books in the Library:");
		for(int i=0; i<book_count;i++) {
			System.out.println((i+1)+ "Title: "+ book_title[i] + "Author: "+ book_author[i]);
		}
	}
	
	public void remove() {
		System.out.println("Enter book title to remove:");
		String title=sc.nextLine();
		
		for (int i=0; i<book_count;i++) {
			if(book_title[i].equalsIgnoreCase(title)) {
				for(int j=i; j<book_count; j++) {
					book_title[j]=book_title[j+1];
					book_author[j]=book_author[j+1];
				}
				book_count--;
				System.out.println("Book removed successfully..");
				return;
			}
		}
				System.out.println("Book not found..");
	}
}
