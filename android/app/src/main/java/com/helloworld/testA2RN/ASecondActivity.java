package com.helloworld.testA2RN;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import com.helloworld.MainActivity;
import com.helloworld.R;


/**
 * Created by 1 on 2016/11/9.
 */

public class ASecondActivity extends AppCompatActivity implements View.OnClickListener
{
    private Button btn;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.native_second);
        initRes();
    }

    private void initRes()
    {
        btn = (Button) findViewById(R.id.button);
        btn.setOnClickListener(this);
    }

    @Override
    public void onClick(View v)
    {
        startActivity(new Intent(this, MainActivity.class));
    }
}
