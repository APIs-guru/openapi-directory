var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var CREATEDIALINGPERMISSIONSCOUNTRYBULKUPDATE_SERVERS = [
    "https://voice.twilio.com",
];
var CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest = /** @class */ (function (_super) {
    __extends(CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest, _super);
    function CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=UpdateRequest;" }),
        __metadata("design:type", String)
    ], CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest.prototype, "updateRequest", void 0);
    return CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest;
}(SpeakeasyBase));
export { CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest };
var CreateDialingPermissionsCountryBulkUpdateSecurity = /** @class */ (function (_super) {
    __extends(CreateDialingPermissionsCountryBulkUpdateSecurity, _super);
    function CreateDialingPermissionsCountryBulkUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateDialingPermissionsCountryBulkUpdateSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateDialingPermissionsCountryBulkUpdateSecurity;
}(SpeakeasyBase));
export { CreateDialingPermissionsCountryBulkUpdateSecurity };
var CreateDialingPermissionsCountryBulkUpdateRequest = /** @class */ (function (_super) {
    __extends(CreateDialingPermissionsCountryBulkUpdateRequest, _super);
    function CreateDialingPermissionsCountryBulkUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDialingPermissionsCountryBulkUpdateRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest)
    ], CreateDialingPermissionsCountryBulkUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateDialingPermissionsCountryBulkUpdateSecurity)
    ], CreateDialingPermissionsCountryBulkUpdateRequest.prototype, "security", void 0);
    return CreateDialingPermissionsCountryBulkUpdateRequest;
}(SpeakeasyBase));
export { CreateDialingPermissionsCountryBulkUpdateRequest };
var CreateDialingPermissionsCountryBulkUpdateResponse = /** @class */ (function (_super) {
    __extends(CreateDialingPermissionsCountryBulkUpdateResponse, _super);
    function CreateDialingPermissionsCountryBulkUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateDialingPermissionsCountryBulkUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateDialingPermissionsCountryBulkUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate)
    ], CreateDialingPermissionsCountryBulkUpdateResponse.prototype, "voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate", void 0);
    return CreateDialingPermissionsCountryBulkUpdateResponse;
}(SpeakeasyBase));
export { CreateDialingPermissionsCountryBulkUpdateResponse };
