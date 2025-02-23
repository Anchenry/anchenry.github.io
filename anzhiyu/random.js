var posts=["2024/03/14/【Arcpy】栅格数据的批量镶嵌和上传切片/","2023/10/13/【QT+SQLite】实现大学生课程学习管理与成绩评价系统整体设计/","2023/11/13/【QT-SQLite】实现大学生课程学习管理与成绩评价系统（2）——数据库实现/","2024/03/14/【QT-SQLite】实现大学生课程学习管理与成绩评价系统（3）——代码编写/","2025/02/23/个人简历/","2025/02/23/项目概览/","2025/02/24/【Leaflet】太湖导览界面开发/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };