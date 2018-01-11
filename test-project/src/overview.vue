<template>
  <el-container>
      <el-header>
      </el-header>
      <el-main style="height: 370px;">
          <div style="margin:50px 150px;background:#333">
                <div style="height: 100px;">
                    <el-row :gutter="20">
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    </el-row>
                </div>
                <div style="margin:20px 0 0 0;height: 100px;">
                    <el-row :gutter="20">
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    </el-row>
                </div>
                <div style="margin:20px 0 0 0;height: 100px;">
                    <el-row :gutter="20">
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    </el-row>
                </div>
          </div>
      </el-main>
      <el-footer>
      </el-footer>
  </el-container>
</template>

<script>
export default {
  date() {
    return {};
  }
};
</script>

<style scoped>
@import "../static/css/base.css";
</style>

<style>
.div_row {
    height: 200px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
