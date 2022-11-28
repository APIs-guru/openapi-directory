import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GenericProblem } from "./genericproblem";
import { InvalidRequestProblem } from "./invalidrequestproblem";
import { ClientForbiddenProblem } from "./clientforbiddenproblem";
import { ResourceNotFoundProblem } from "./resourcenotfoundproblem";
import { ResourceUnauthorizedProblem } from "./resourceunauthorizedproblem";
import { DisallowedResourceProblem } from "./disallowedresourceproblem";
import { UnsupportedAuthenticationProblem } from "./unsupportedauthenticationproblem";
import { UsageCapExceededProblem } from "./usagecapexceededproblem";
import { Expansions } from "./expansions";



export class SingleTweetLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: any[];

  @SpeakeasyMetadata({ data: "json, name=includes" })
  includes?: Expansions;
}
