import { SpeakeasyBase } from "../../../internal/utils";
import { MemberViewModel } from "./memberviewmodel";
export declare enum LineViewModelContentTypeEnum {
    Generic = "Generic",
    Member = "Member",
    OralQuestionTime = "OralQuestionTime",
    AnsweringBody = "AnsweringBody",
    Bill = "Bill"
}
export declare enum LineViewModelHorizontalAlignmentEnum {
    Left = "Left",
    Right = "Right",
    Centre = "Centre"
}
export declare enum LineViewModelStyleEnum {
    DividerSolid = "DividerSolid",
    EmptyLine = "EmptyLine",
    Member = "Member",
    Footer = "Footer",
    AnsweringBody = "AnsweringBody",
    WestminsterHallInfo = "WestminsterHallInfo",
    GrandCommitteeInfo = "GrandCommitteeInfo",
    DividerDotted = "DividerDotted",
    DividerDashed = "DividerDashed",
    Division = "Division",
    Text150 = "Text150",
    Text140 = "Text140",
    Text130 = "Text130",
    Text120 = "Text120",
    Text110 = "Text110",
    Text100 = "Text100",
    Text90 = "Text90",
    Text80 = "Text80",
    Text70 = "Text70"
}
export declare enum LineViewModelVerticalAlignmentEnum {
    Top = "Top",
    Middle = "Middle",
    Bottom = "Bottom"
}
export declare class LineViewModel extends SpeakeasyBase {
    content?: string;
    contentAdditionalJson?: string;
    contentType?: LineViewModelContentTypeEnum;
    contentUrl?: string;
    displayOrder?: number;
    forceCapitalisation?: boolean;
    horizontalAlignment?: LineViewModelHorizontalAlignmentEnum;
    member?: MemberViewModel;
    style?: LineViewModelStyleEnum;
    verticalAlignment?: LineViewModelVerticalAlignmentEnum;
}
