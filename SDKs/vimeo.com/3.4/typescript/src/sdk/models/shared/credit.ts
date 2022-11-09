import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";
import { Video } from "./video";


export class Credit extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=role" })
  role: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user?: User;

  @Metadata({ data: "json, name=video" })
  video?: Video;
}
