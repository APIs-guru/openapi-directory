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
export var CreateSimServerList = [
    "https://supersim.twilio.com",
];
var CreateSimCreateSimRequest = /** @class */ (function (_super) {
    __extends(CreateSimCreateSimRequest, _super);
    function CreateSimCreateSimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Iccid;" }),
        __metadata("design:type", String)
    ], CreateSimCreateSimRequest.prototype, "iccid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=RegistrationCode;" }),
        __metadata("design:type", String)
    ], CreateSimCreateSimRequest.prototype, "registrationCode", void 0);
    return CreateSimCreateSimRequest;
}(SpeakeasyBase));
export { CreateSimCreateSimRequest };
var CreateSimSecurity = /** @class */ (function (_super) {
    __extends(CreateSimSecurity, _super);
    function CreateSimSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSimSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSimSecurity;
}(SpeakeasyBase));
export { CreateSimSecurity };
var CreateSimRequest = /** @class */ (function (_super) {
    __extends(CreateSimRequest, _super);
    function CreateSimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSimRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSimCreateSimRequest)
    ], CreateSimRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSimSecurity)
    ], CreateSimRequest.prototype, "security", void 0);
    return CreateSimRequest;
}(SpeakeasyBase));
export { CreateSimRequest };
var CreateSimResponse = /** @class */ (function (_super) {
    __extends(CreateSimResponse, _super);
    function CreateSimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSimResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSimResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupersimV1Sim)
    ], CreateSimResponse.prototype, "supersimV1Sim", void 0);
    return CreateSimResponse;
}(SpeakeasyBase));
export { CreateSimResponse };
