import java.util.Scanner;

public class StudentPrjct {
public static void main(String[] args) {
	Scanner obj = new Scanner(System.in);
	
	System.out.println("Enter student's name:");
	String name= obj.nextLine();
	
	System.out.println("Enter student's age:");
	int age= obj.nextInt();
	
	System.out.println("Enter grade for Maths:");
	double mm= obj.nextDouble();
	
	System.out.println("Enter grade for science:");
	float sm= obj.nextFloat();
	
	System.out.println("Enter grade for English");
	float em= obj.nextFloat();
	
	double avg= (mm+sm+em)/3;
	
	
	System.out.println("Student Name:"+name+"\nAge:"+age+"\nMaths Grade:"+mm+"\nScience Grade:"+sm+"\nEnglish Grade:"+em+"\nAverage Grade:"+avg);

	if(avg>=70) {
		System.out.println("Grade Classification: First Class");
	}
	
	else if(avg<70 && avg>=50) {
		System.out.println("Grade Classification: Second Class");
	}
	
	else if(avg<50 && avg>=35) {
		System.out.println("Grade Classification: Third Class");
	}
	
	else{
		System.out.println("e Classification: Fail");
	}


}
}
