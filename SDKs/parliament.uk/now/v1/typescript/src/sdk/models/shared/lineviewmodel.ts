import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberViewModel } from "./memberviewmodel";

export enum LineViewModelContentTypeEnum {
    Generic = "Generic"
,    Member = "Member"
,    OralQuestionTime = "OralQuestionTime"
,    AnsweringBody = "AnsweringBody"
,    Bill = "Bill"
}

export enum LineViewModelHorizontalAlignmentEnum {
    Left = "Left"
,    Right = "Right"
,    Centre = "Centre"
}

export enum LineViewModelStyleEnum {
    DividerSolid = "DividerSolid"
,    EmptyLine = "EmptyLine"
,    Member = "Member"
,    Footer = "Footer"
,    AnsweringBody = "AnsweringBody"
,    WestminsterHallInfo = "WestminsterHallInfo"
,    GrandCommitteeInfo = "GrandCommitteeInfo"
,    DividerDotted = "DividerDotted"
,    DividerDashed = "DividerDashed"
,    Division = "Division"
,    Text150 = "Text150"
,    Text140 = "Text140"
,    Text130 = "Text130"
,    Text120 = "Text120"
,    Text110 = "Text110"
,    Text100 = "Text100"
,    Text90 = "Text90"
,    Text80 = "Text80"
,    Text70 = "Text70"
}

export enum LineViewModelVerticalAlignmentEnum {
    Top = "Top"
,    Middle = "Middle"
,    Bottom = "Bottom"
}


export class LineViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=contentAdditionalJson" })
  contentAdditionalJson?: string;

  @Metadata({ data: "json, name=contentType" })
  contentType?: LineViewModelContentTypeEnum;

  @Metadata({ data: "json, name=contentUrl" })
  contentUrl?: string;

  @Metadata({ data: "json, name=displayOrder" })
  displayOrder?: number;

  @Metadata({ data: "json, name=forceCapitalisation" })
  forceCapitalisation?: boolean;

  @Metadata({ data: "json, name=horizontalAlignment" })
  horizontalAlignment?: LineViewModelHorizontalAlignmentEnum;

  @Metadata({ data: "json, name=member" })
  member?: MemberViewModel;

  @Metadata({ data: "json, name=style" })
  style?: LineViewModelStyleEnum;

  @Metadata({ data: "json, name=verticalAlignment" })
  verticalAlignment?: LineViewModelVerticalAlignmentEnum;
}
