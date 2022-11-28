import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeSpotifyAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
