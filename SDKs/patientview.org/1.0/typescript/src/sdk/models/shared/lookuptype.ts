import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LookupTypeTypeEnum {
    Group = "GROUP",
    Menu = "MENU",
    Role = "ROLE",
    CodeStandard = "CODE_STANDARD",
    CodeType = "CODE_TYPE",
    FeatureType = "FEATURE_TYPE",
    RelationshipType = "RELATIONSHIP_TYPE",
    Identifier = "IDENTIFIER",
    ContactPointType = "CONTACT_POINT_TYPE",
    StatisticType = "STATISTIC_TYPE",
    NewsType = "NEWS_TYPE",
    Gender = "GENDER",
    IbdCrohnslocation = "IBD_CROHNSLOCATION",
    IbdCrohnsproximalterminalileum = "IBD_CROHNSPROXIMALTERMINALILEUM",
    IbdCrohnsperianal = "IBD_CROHNSPERIANAL",
    IbdCrohnsbehaviour = "IBD_CROHNSBEHAVIOUR",
    IbdUcextent = "IBD_UCEXTENT",
    IbdEgimcomplication = "IBD_EGIMCOMPLICATION",
    IbdSurgerymainprocedure = "IBD_SURGERYMAINPROCEDURE",
    IbdSmokingstatus = "IBD_SMOKINGSTATUS",
    IbdFamilyhistory = "IBD_FAMILYHISTORY",
    LinkType = "LINK_TYPE"
}


export class LookupType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastUpdate" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LookupTypeTypeEnum;
}
