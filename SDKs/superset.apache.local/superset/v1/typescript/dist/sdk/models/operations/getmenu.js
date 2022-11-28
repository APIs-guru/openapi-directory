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
var GetMenuSecurity = /** @class */ (function (_super) {
    __extends(GetMenuSecurity, _super);
    function GetMenuSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetMenuSecurity.prototype, "jwt", void 0);
    return GetMenuSecurity;
}(SpeakeasyBase));
export { GetMenuSecurity };
var GetMenu200ApplicationJsonResult = /** @class */ (function (_super) {
    __extends(GetMenu200ApplicationJsonResult, _super);
    function GetMenu200ApplicationJsonResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=childs" }),
        __metadata("design:type", Array)
    ], GetMenu200ApplicationJsonResult.prototype, "childs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon" }),
        __metadata("design:type", String)
    ], GetMenu200ApplicationJsonResult.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], GetMenu200ApplicationJsonResult.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetMenu200ApplicationJsonResult.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetMenu200ApplicationJsonResult.prototype, "url", void 0);
    return GetMenu200ApplicationJsonResult;
}(SpeakeasyBase));
export { GetMenu200ApplicationJsonResult };
var GetMenu200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMenu200ApplicationJson, _super);
    function GetMenu200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: GetMenu200ApplicationJsonResult }),
        __metadata("design:type", Array)
    ], GetMenu200ApplicationJson.prototype, "result", void 0);
    return GetMenu200ApplicationJson;
}(SpeakeasyBase));
export { GetMenu200ApplicationJson };
var GetMenu401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMenu401ApplicationJson, _super);
    function GetMenu401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetMenu401ApplicationJson.prototype, "message", void 0);
    return GetMenu401ApplicationJson;
}(SpeakeasyBase));
export { GetMenu401ApplicationJson };
var GetMenuRequest = /** @class */ (function (_super) {
    __extends(GetMenuRequest, _super);
    function GetMenuRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMenuSecurity)
    ], GetMenuRequest.prototype, "security", void 0);
    return GetMenuRequest;
}(SpeakeasyBase));
export { GetMenuRequest };
var GetMenuResponse = /** @class */ (function (_super) {
    __extends(GetMenuResponse, _super);
    function GetMenuResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMenuResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMenu200ApplicationJson)
    ], GetMenuResponse.prototype, "getMenu200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMenu401ApplicationJson)
    ], GetMenuResponse.prototype, "getMenu401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMenuResponse.prototype, "statusCode", void 0);
    return GetMenuResponse;
}(SpeakeasyBase));
export { GetMenuResponse };
