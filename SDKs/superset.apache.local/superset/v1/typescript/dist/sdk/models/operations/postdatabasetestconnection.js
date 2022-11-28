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
var PostDatabaseTestConnectionSecurity = /** @class */ (function (_super) {
    __extends(PostDatabaseTestConnectionSecurity, _super);
    function PostDatabaseTestConnectionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostDatabaseTestConnectionSecurity.prototype, "jwt", void 0);
    return PostDatabaseTestConnectionSecurity;
}(SpeakeasyBase));
export { PostDatabaseTestConnectionSecurity };
var PostDatabaseTestConnection200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseTestConnection200ApplicationJson, _super);
    function PostDatabaseTestConnection200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseTestConnection200ApplicationJson.prototype, "message", void 0);
    return PostDatabaseTestConnection200ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseTestConnection200ApplicationJson };
var PostDatabaseTestConnection400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseTestConnection400ApplicationJson, _super);
    function PostDatabaseTestConnection400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseTestConnection400ApplicationJson.prototype, "message", void 0);
    return PostDatabaseTestConnection400ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseTestConnection400ApplicationJson };
var PostDatabaseTestConnection422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseTestConnection422ApplicationJson, _super);
    function PostDatabaseTestConnection422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseTestConnection422ApplicationJson.prototype, "message", void 0);
    return PostDatabaseTestConnection422ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseTestConnection422ApplicationJson };
var PostDatabaseTestConnection500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabaseTestConnection500ApplicationJson, _super);
    function PostDatabaseTestConnection500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabaseTestConnection500ApplicationJson.prototype, "message", void 0);
    return PostDatabaseTestConnection500ApplicationJson;
}(SpeakeasyBase));
export { PostDatabaseTestConnection500ApplicationJson };
var PostDatabaseTestConnectionRequest = /** @class */ (function (_super) {
    __extends(PostDatabaseTestConnectionRequest, _super);
    function PostDatabaseTestConnectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DatabaseTestConnectionSchema)
    ], PostDatabaseTestConnectionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseTestConnectionSecurity)
    ], PostDatabaseTestConnectionRequest.prototype, "security", void 0);
    return PostDatabaseTestConnectionRequest;
}(SpeakeasyBase));
export { PostDatabaseTestConnectionRequest };
var PostDatabaseTestConnectionResponse = /** @class */ (function (_super) {
    __extends(PostDatabaseTestConnectionResponse, _super);
    function PostDatabaseTestConnectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDatabaseTestConnectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseTestConnection200ApplicationJson)
    ], PostDatabaseTestConnectionResponse.prototype, "postDatabaseTestConnection200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseTestConnection400ApplicationJson)
    ], PostDatabaseTestConnectionResponse.prototype, "postDatabaseTestConnection400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseTestConnection422ApplicationJson)
    ], PostDatabaseTestConnectionResponse.prototype, "postDatabaseTestConnection422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseTestConnection500ApplicationJson)
    ], PostDatabaseTestConnectionResponse.prototype, "postDatabaseTestConnection500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDatabaseTestConnectionResponse.prototype, "statusCode", void 0);
    return PostDatabaseTestConnectionResponse;
}(SpeakeasyBase));
export { PostDatabaseTestConnectionResponse };
