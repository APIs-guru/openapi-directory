import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DistrictList extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation: string;

  @Metadata({ data: "json, name=display_name" })
  displayName: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=year" })
  year: number;
}
