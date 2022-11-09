import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BiographyExperience extends SpeakeasyBase {
  @Metadata({ data: "json, name=endMonth" })
  endMonth?: number;

  @Metadata({ data: "json, name=endYear" })
  endYear?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=organisation" })
  organisation?: string;

  @Metadata({ data: "json, name=startMonth" })
  startMonth?: number;

  @Metadata({ data: "json, name=startYear" })
  startYear?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=typeId" })
  typeId?: number;
}
