import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TflApiPresentationEntitiesRoadProjectPhaseEnum {
    Unscoped = "Unscoped"
,    Concept = "Concept"
,    ConsultationEnded = "ConsultationEnded"
,    Consultation = "Consultation"
,    Construction = "Construction"
,    Complete = "Complete"
}


export class TflApiPresentationEntitiesRoadProject extends SpeakeasyBase {
  @Metadata({ data: "json, name=boroughsBenefited" })
  boroughsBenefited?: string[];

  @Metadata({ data: "json, name=constructionEndDate" })
  constructionEndDate?: Date;

  @Metadata({ data: "json, name=constructionStartDate" })
  constructionStartDate?: Date;

  @Metadata({ data: "json, name=consultationEndDate" })
  consultationEndDate?: Date;

  @Metadata({ data: "json, name=consultationPageUrl" })
  consultationPageUrl?: string;

  @Metadata({ data: "json, name=consultationStartDate" })
  consultationStartDate?: Date;

  @Metadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @Metadata({ data: "json, name=contactName" })
  contactName?: string;

  @Metadata({ data: "json, name=cycleSuperhighwayId" })
  cycleSuperhighwayId?: string;

  @Metadata({ data: "json, name=externalPageUrl" })
  externalPageUrl?: string;

  @Metadata({ data: "json, name=phase" })
  phase?: TflApiPresentationEntitiesRoadProjectPhaseEnum;

  @Metadata({ data: "json, name=projectDescription" })
  projectDescription?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=projectName" })
  projectName?: string;

  @Metadata({ data: "json, name=projectPageUrl" })
  projectPageUrl?: string;

  @Metadata({ data: "json, name=projectSummaryPageUrl" })
  projectSummaryPageUrl?: string;

  @Metadata({ data: "json, name=schemeName" })
  schemeName?: string;
}
