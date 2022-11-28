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
var GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses = /** @class */ (function (_super) {
    __extends(GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses, _super);
    function GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=absoluteUrl" }),
        __metadata("design:type", String)
    ], GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses.prototype, "absoluteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookies" }),
        __metadata("design:type", Map)
    ], GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses.prototype, "cookies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses.prototype, "url", void 0);
    return GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses;
}(SpeakeasyBase));
export { GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses };
var GetAdminRequestsUnmatchedNearMisses200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAdminRequestsUnmatchedNearMisses200ApplicationJson, _super);
    function GetAdminRequestsUnmatchedNearMisses200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nearMisses", elemType: GetAdminRequestsUnmatchedNearMisses200ApplicationJsonNearMisses }),
        __metadata("design:type", Array)
    ], GetAdminRequestsUnmatchedNearMisses200ApplicationJson.prototype, "nearMisses", void 0);
    return GetAdminRequestsUnmatchedNearMisses200ApplicationJson;
}(SpeakeasyBase));
export { GetAdminRequestsUnmatchedNearMisses200ApplicationJson };
var GetAdminRequestsUnmatchedNearMissesResponse = /** @class */ (function (_super) {
    __extends(GetAdminRequestsUnmatchedNearMissesResponse, _super);
    function GetAdminRequestsUnmatchedNearMissesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAdminRequestsUnmatchedNearMissesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAdminRequestsUnmatchedNearMisses200ApplicationJson)
    ], GetAdminRequestsUnmatchedNearMissesResponse.prototype, "getAdminRequestsUnmatchedNearMisses200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAdminRequestsUnmatchedNearMissesResponse.prototype, "statusCode", void 0);
    return GetAdminRequestsUnmatchedNearMissesResponse;
}(SpeakeasyBase));
export { GetAdminRequestsUnmatchedNearMissesResponse };
