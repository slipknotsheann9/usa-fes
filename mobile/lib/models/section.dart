import 'dart:convert';

import 'package:usafes/models/base.dart';

class SectionModel extends BaseModel {
  String name;
  String title;
  int level;
  String section;

  SectionModel({
    required int id,
    required this.name,
    required this.title,
    required this.level,
    required this.section,
    required String createdAt,
    required String updatedAt,
  }) : super(
          id: id,
          createdAt: createdAt,
          updatedAt: updatedAt,
        );

  factory SectionModel.fromJson(dynamic data) {
    var instance = SectionModel(
      id: data['id'],
      name: data['name'],
      title: data['title'],
      level: data['level'],
      section: data['section'],
      createdAt: data['created_at'],
      updatedAt: data['updated_at'],
    );

    return instance;
  }

  static List<SectionModel> collection(List<dynamic> collection) {
    List<SectionModel> data = [];

    for (var entry in collection) {
      data.add(SectionModel.fromJson(entry));
    }

    return data;
  }

  @override
  toObject() {
    return {
      'id': id,
      'name': name,
      'title': title,
      'level': level,
      'section': section,
      'created_at': createdAt,
      'updated_at': updatedAt
    };
  }

  @override
  String toJson() {
    return jsonEncode(toObject());
  }
}
