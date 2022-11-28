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
export var GetUserUsernameTokenKindKindEnum;
(function (GetUserUsernameTokenKindKindEnum) {
    GetUserUsernameTokenKindKindEnum["Access"] = "'access'";
    GetUserUsernameTokenKindKindEnum["Refresh"] = "'refresh'";
    GetUserUsernameTokenKindKindEnum["Authorization"] = "'authorization'";
    GetUserUsernameTokenKindKindEnum["Id"] = "'id'";
    GetUserUsernameTokenKindKindEnum["Selfie"] = "'selfie'";
    GetUserUsernameTokenKindKindEnum["Plain"] = "'plain'";
})(GetUserUsernameTokenKindKindEnum || (GetUserUsernameTokenKindKindEnum = {}));
var GetUserUsernameTokenKindPathParams = /** @class */ (function (_super) {
    __extends(GetUserUsernameTokenKindPathParams, _super);
    function GetUserUsernameTokenKindPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=kind" }),
        __metadata("design:type", String)
    ], GetUserUsernameTokenKindPathParams.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetUserUsernameTokenKindPathParams.prototype, "username", void 0);
    return GetUserUsernameTokenKindPathParams;
}(SpeakeasyBase));
export { GetUserUsernameTokenKindPathParams };
var GetUserUsernameTokenKindQueryParams = /** @class */ (function (_super) {
    __extends(GetUserUsernameTokenKindQueryParams, _super);
    function GetUserUsernameTokenKindQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", String)
    ], GetUserUsernameTokenKindQueryParams.prototype, "scope", void 0);
    return GetUserUsernameTokenKindQueryParams;
}(SpeakeasyBase));
export { GetUserUsernameTokenKindQueryParams };
var GetUserUsernameTokenKindRequest = /** @class */ (function (_super) {
    __extends(GetUserUsernameTokenKindRequest, _super);
    function GetUserUsernameTokenKindRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserUsernameTokenKindPathParams)
    ], GetUserUsernameTokenKindRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserUsernameTokenKindQueryParams)
    ], GetUserUsernameTokenKindRequest.prototype, "queryParams", void 0);
    return GetUserUsernameTokenKindRequest;
}(SpeakeasyBase));
export { GetUserUsernameTokenKindRequest };
var GetUserUsernameTokenKindResponse = /** @class */ (function (_super) {
    __extends(GetUserUsernameTokenKindResponse, _super);
    function GetUserUsernameTokenKindResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserUsernameTokenKindResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserUsernameTokenKindResponse.prototype, "statusCode", void 0);
    return GetUserUsernameTokenKindResponse;
}(SpeakeasyBase));
export { GetUserUsernameTokenKindResponse };
