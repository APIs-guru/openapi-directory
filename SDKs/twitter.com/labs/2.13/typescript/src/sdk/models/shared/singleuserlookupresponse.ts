import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GenericProblem } from "./genericproblem";
import { InvalidRequestProblem } from "./invalidrequestproblem";
import { ClientForbiddenProblem } from "./clientforbiddenproblem";
import { ResourceNotFoundProblem } from "./resourcenotfoundproblem";
import { ResourceUnauthorizedProblem } from "./resourceunauthorizedproblem";
import { DisallowedResourceProblem } from "./disallowedresourceproblem";
import { UnsupportedAuthenticationProblem } from "./unsupportedauthenticationproblem";
import { UsageCapExceededProblem } from "./usagecapexceededproblem";
import { Expansions } from "./expansions";


export class SingleUserLookupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: any;

  @Metadata({ data: "json, name=errors" })
  errors?: any[];

  @Metadata({ data: "json, name=includes" })
  includes?: Expansions;
}
