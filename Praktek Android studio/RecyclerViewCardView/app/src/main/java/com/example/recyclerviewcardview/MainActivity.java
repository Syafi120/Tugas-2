package com.example.recyclerviewcardview;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.view.View;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    RecyclerView recyclerView;
    SiswaAdapter adapter;
    List<Siswa> siswaList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        load();
        isiData();
    }

    public void load(){
        recyclerView = findViewById(R.id.rcvSiswa);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
    }

    public void isiData(){
        siswaList = new ArrayList<Siswa>();
        siswaList.add(new Siswa("Agus","Sidoarjo"));
        siswaList.add(new Siswa("Bagus","Sidoarjo"));
        siswaList.add(new Siswa("Bagas","Sidoarjo"));
        siswaList.add(new Siswa("John","Sidoarjo"));
        siswaList.add(new Siswa("Eka","Sidoarjo"));
        siswaList.add(new Siswa("Budi","Sidoarjo"));
        siswaList.add(new Siswa("Stevan","Sidoarjo"));
        siswaList.add(new Siswa("Yanti","Sidoarjo"));
        siswaList.add(new Siswa("Yanto","Sidoarjo"));
        siswaList.add(new Siswa("Mutia","Sidoarjo"));
        siswaList.add(new Siswa("Suprapto","Sidoarjo"));
        siswaList.add(new Siswa("Feysa","Sidoarjo"));
        siswaList.add(new Siswa("Arsya","Sidoarjo"));
        siswaList.add(new Siswa("Halim","Sidoarjo"));
        siswaList.add(new Siswa("Kholiq","Sidoarjo"));

        adapter = new SiswaAdapter(this,siswaList);
        recyclerView.setAdapter(adapter);
    }

    public void btnTambah(View view){
        siswaList.add(new Siswa("Agus Ramadhani", "Banyuwangi"));
        adapter.notifyDataSetChanged();
    }
}