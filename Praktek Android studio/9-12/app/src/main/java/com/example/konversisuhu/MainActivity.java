package com.example.konversisuhu;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    Spinner spinner;
    EditText etNilai;
    TextView tvHasil;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        load();
//        isiSpinner();
    }

    public void load(){
        spinner = findViewById(R.id.spinner);
        etNilai = findViewById(R.id.etNilai);
        tvHasil = findViewById(R.id.tvHasil);
    }

//    public void isiSpinner(){
//        String[] isi = {
//                "Celcius To Reamur",
//                "Celcius To Fahrenheit",
//                "Celcius To Kelvin"
//        };
//
//        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item,isi);
//        spinner.setAdapter(adapter);
//    }

    public void btnKonversi(View view){
        String pilihan = spinner.getSelectedItem().toString();

        if (etNilai.getText().toString().equals("")){
            Toast.makeText(this, "Nilai Tidak Kosong", Toast.LENGTH_SHORT).show();
        }else{
            if (pilihan.equals("Celcius To Reamur")){
                cIcR();
            }
            if (pilihan.equals("Celcius To Fahrenheit")){
                cIcF();
            }
            if (pilihan.equals("Celcius To Kelvin")){
                cIcK();
            }
            if (pilihan.equals("Reamur To Celcius")){
                RcIc();
            }
            if (pilihan.equals("Reamur To Fahrenheit")){
                FcIc();
            }
        }
    }

    public void cIcR(){
        double suhu = Double.parseDouble(etNilai.getText().toString());
        double hasil = (4.0/5.0) * suhu;
        tvHasil.setText(hasil+ "");
    }

    public void cIcF(){
        double suhu = Double.parseDouble(etNilai.getText().toString());
        double hasil = (9.0/5.0) * suhu + 32.0;
        tvHasil.setText(hasil+ "");
    }

    public void cIcK(){
        double suhu = Double.parseDouble(etNilai.getText().toString());
        double hasil = suhu + 273.15;
        tvHasil.setText(hasil+ "");
    }

    public void RcIc(){
        double suhu = Double.parseDouble(etNilai.getText().toString());
        double hasil = suhu / 0.8;
        tvHasil.setText(hasil+ "");
    }

    public void FcIc(){
        double suhu = Double.parseDouble(etNilai.getText().toString());
        double hasil = (suhu * 2.25) + 32.0;
        tvHasil.setText(hasil+ "");
    }
}