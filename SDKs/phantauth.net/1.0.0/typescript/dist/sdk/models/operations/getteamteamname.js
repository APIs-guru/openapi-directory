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
var GetTeamTeamnamePathParams = /** @class */ (function (_super) {
    __extends(GetTeamTeamnamePathParams, _super);
    function GetTeamTeamnamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamname" }),
        __metadata("design:type", String)
    ], GetTeamTeamnamePathParams.prototype, "teamname", void 0);
    return GetTeamTeamnamePathParams;
}(SpeakeasyBase));
export { GetTeamTeamnamePathParams };
var GetTeamTeamname200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTeamTeamname200ApplicationJson, _super);
    function GetTeamTeamname200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=@id" }),
        __metadata("design:type", String)
    ], GetTeamTeamname200ApplicationJson.prototype, "atId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], GetTeamTeamname200ApplicationJson.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo_email" }),
        __metadata("design:type", String)
    ], GetTeamTeamname200ApplicationJson.prototype, "logoEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members" }),
        __metadata("design:type", Array)
    ], GetTeamTeamname200ApplicationJson.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetTeamTeamname200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile" }),
        __metadata("design:type", String)
    ], GetTeamTeamname200ApplicationJson.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub" }),
        __metadata("design:type", String)
    ], GetTeamTeamname200ApplicationJson.prototype, "sub", void 0);
    return GetTeamTeamname200ApplicationJson;
}(SpeakeasyBase));
export { GetTeamTeamname200ApplicationJson };
var GetTeamTeamnameRequest = /** @class */ (function (_super) {
    __extends(GetTeamTeamnameRequest, _super);
    function GetTeamTeamnameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamTeamnamePathParams)
    ], GetTeamTeamnameRequest.prototype, "pathParams", void 0);
    return GetTeamTeamnameRequest;
}(SpeakeasyBase));
export { GetTeamTeamnameRequest };
var GetTeamTeamnameResponse = /** @class */ (function (_super) {
    __extends(GetTeamTeamnameResponse, _super);
    function GetTeamTeamnameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamTeamnameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamTeamname200ApplicationJson)
    ], GetTeamTeamnameResponse.prototype, "getTeamTeamname200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamTeamnameResponse.prototype, "statusCode", void 0);
    return GetTeamTeamnameResponse;
}(SpeakeasyBase));
export { GetTeamTeamnameResponse };
