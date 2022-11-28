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
export var GetUserInfo200ApplicationJsonActionEnum;
(function (GetUserInfo200ApplicationJsonActionEnum) {
    GetUserInfo200ApplicationJsonActionEnum["GetUserInfo"] = "getUserInfo";
})(GetUserInfo200ApplicationJsonActionEnum || (GetUserInfo200ApplicationJsonActionEnum = {}));
export var GetUserInfo200ApplicationJsonDataDigestEnum;
(function (GetUserInfo200ApplicationJsonDataDigestEnum) {
    GetUserInfo200ApplicationJsonDataDigestEnum["Bcrypt"] = "BCRYPT";
    GetUserInfo200ApplicationJsonDataDigestEnum["Sha512"] = "SHA512";
    GetUserInfo200ApplicationJsonDataDigestEnum["Sha256"] = "SHA256";
    GetUserInfo200ApplicationJsonDataDigestEnum["Sha1"] = "SHA1";
    GetUserInfo200ApplicationJsonDataDigestEnum["Md5"] = "MD5";
})(GetUserInfo200ApplicationJsonDataDigestEnum || (GetUserInfo200ApplicationJsonDataDigestEnum = {}));
var GetUserInfo200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetUserInfo200ApplicationJsonData, _super);
    function GetUserInfo200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=digest" }),
        __metadata("design:type", String)
    ], GetUserInfo200ApplicationJsonData.prototype, "digest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: shared.Users }),
        __metadata("design:type", Array)
    ], GetUserInfo200ApplicationJsonData.prototype, "users", void 0);
    return GetUserInfo200ApplicationJsonData;
}(SpeakeasyBase));
export { GetUserInfo200ApplicationJsonData };
export var GetUserInfo200ApplicationJsonResultEnum;
(function (GetUserInfo200ApplicationJsonResultEnum) {
    GetUserInfo200ApplicationJsonResultEnum["Success"] = "success";
    GetUserInfo200ApplicationJsonResultEnum["Error"] = "error";
})(GetUserInfo200ApplicationJsonResultEnum || (GetUserInfo200ApplicationJsonResultEnum = {}));
var GetUserInfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserInfo200ApplicationJson, _super);
    function GetUserInfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetUserInfo200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetUserInfo200ApplicationJsonData)
    ], GetUserInfo200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetUserInfo200ApplicationJson.prototype, "result", void 0);
    return GetUserInfo200ApplicationJson;
}(SpeakeasyBase));
export { GetUserInfo200ApplicationJson };
var GetUserInfoResponse = /** @class */ (function (_super) {
    __extends(GetUserInfoResponse, _super);
    function GetUserInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserInfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserInfoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserInfo200ApplicationJson)
    ], GetUserInfoResponse.prototype, "getUserInfo200ApplicationJsonObject", void 0);
    return GetUserInfoResponse;
}(SpeakeasyBase));
export { GetUserInfoResponse };
