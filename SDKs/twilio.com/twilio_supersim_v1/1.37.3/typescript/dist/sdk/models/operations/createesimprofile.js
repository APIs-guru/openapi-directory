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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var CreateEsimProfileServerList = [
    "https://supersim.twilio.com",
];
export var CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum;
(function (CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum) {
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Head"] = "HEAD";
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Get"] = "GET";
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Post"] = "POST";
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Patch"] = "PATCH";
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Put"] = "PUT";
    CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum["Delete"] = "DELETE";
})(CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum || (CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum = {}));
var CreateEsimProfileCreateEsimProfileRequest = /** @class */ (function (_super) {
    __extends(CreateEsimProfileCreateEsimProfileRequest, _super);
    function CreateEsimProfileCreateEsimProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackMethod;" }),
        __metadata("design:type", String)
    ], CreateEsimProfileCreateEsimProfileRequest.prototype, "callbackMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=CallbackUrl;" }),
        __metadata("design:type", String)
    ], CreateEsimProfileCreateEsimProfileRequest.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Eid;" }),
        __metadata("design:type", String)
    ], CreateEsimProfileCreateEsimProfileRequest.prototype, "eid", void 0);
    return CreateEsimProfileCreateEsimProfileRequest;
}(SpeakeasyBase));
export { CreateEsimProfileCreateEsimProfileRequest };
var CreateEsimProfileSecurity = /** @class */ (function (_super) {
    __extends(CreateEsimProfileSecurity, _super);
    function CreateEsimProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateEsimProfileSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateEsimProfileSecurity;
}(SpeakeasyBase));
export { CreateEsimProfileSecurity };
var CreateEsimProfileRequest = /** @class */ (function (_super) {
    __extends(CreateEsimProfileRequest, _super);
    function CreateEsimProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEsimProfileRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateEsimProfileCreateEsimProfileRequest)
    ], CreateEsimProfileRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEsimProfileSecurity)
    ], CreateEsimProfileRequest.prototype, "security", void 0);
    return CreateEsimProfileRequest;
}(SpeakeasyBase));
export { CreateEsimProfileRequest };
var CreateEsimProfileResponse = /** @class */ (function (_super) {
    __extends(CreateEsimProfileResponse, _super);
    function CreateEsimProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEsimProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateEsimProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupersimV1EsimProfile)
    ], CreateEsimProfileResponse.prototype, "supersimV1EsimProfile", void 0);
    return CreateEsimProfileResponse;
}(SpeakeasyBase));
export { CreateEsimProfileResponse };
