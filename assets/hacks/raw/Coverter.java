package me.averydurrant.fileconverter;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.io.PrintWriter;

public class Converter {
	public static void main(String[] args){
		new Converter();
	}

	public Converter() {
		String toPrint = "";

		try {
			BufferedReader reader = new BufferedReader(new InputStreamReader(getClass().getResourceAsStream("/File/File.txt")));

			String line = null;
			while ((line = reader.readLine()) != null) {
				toPrint += "·" + line;
			}


			reader.close();
			BufferedWriter writer = null;
			new File("File.txt").createNewFile();

			try {
				writer = new BufferedWriter(new FileWriter("File.txt"));
			} catch (Exception ex) {
				return;
			}

			toPrint = toPrint.replace("\t", "ø");

			writer.write(toPrint.substring(1));
			writer.flush();
			writer.close();
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}
}
