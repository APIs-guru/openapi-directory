import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { BiographyExperience } from "./biographyexperience";



export class BiographyExperienceListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=value", elemType: BiographyExperience })
  value?: BiographyExperience[];
}
