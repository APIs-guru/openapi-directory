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
var PutDatasetPkRefreshPathParams = /** @class */ (function (_super) {
    __extends(PutDatasetPkRefreshPathParams, _super);
    function PutDatasetPkRefreshPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], PutDatasetPkRefreshPathParams.prototype, "pk", void 0);
    return PutDatasetPkRefreshPathParams;
}(SpeakeasyBase));
export { PutDatasetPkRefreshPathParams };
var PutDatasetPkRefreshSecurity = /** @class */ (function (_super) {
    __extends(PutDatasetPkRefreshSecurity, _super);
    function PutDatasetPkRefreshSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PutDatasetPkRefreshSecurity.prototype, "jwt", void 0);
    return PutDatasetPkRefreshSecurity;
}(SpeakeasyBase));
export { PutDatasetPkRefreshSecurity };
var PutDatasetPkRefresh200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPkRefresh200ApplicationJson, _super);
    function PutDatasetPkRefresh200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPkRefresh200ApplicationJson.prototype, "message", void 0);
    return PutDatasetPkRefresh200ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPkRefresh200ApplicationJson };
var PutDatasetPkRefresh401ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPkRefresh401ApplicationJson, _super);
    function PutDatasetPkRefresh401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPkRefresh401ApplicationJson.prototype, "message", void 0);
    return PutDatasetPkRefresh401ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPkRefresh401ApplicationJson };
var PutDatasetPkRefresh403ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPkRefresh403ApplicationJson, _super);
    function PutDatasetPkRefresh403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPkRefresh403ApplicationJson.prototype, "message", void 0);
    return PutDatasetPkRefresh403ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPkRefresh403ApplicationJson };
var PutDatasetPkRefresh404ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPkRefresh404ApplicationJson, _super);
    function PutDatasetPkRefresh404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPkRefresh404ApplicationJson.prototype, "message", void 0);
    return PutDatasetPkRefresh404ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPkRefresh404ApplicationJson };
var PutDatasetPkRefresh422ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPkRefresh422ApplicationJson, _super);
    function PutDatasetPkRefresh422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPkRefresh422ApplicationJson.prototype, "message", void 0);
    return PutDatasetPkRefresh422ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPkRefresh422ApplicationJson };
var PutDatasetPkRefresh500ApplicationJson = /** @class */ (function (_super) {
    __extends(PutDatasetPkRefresh500ApplicationJson, _super);
    function PutDatasetPkRefresh500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutDatasetPkRefresh500ApplicationJson.prototype, "message", void 0);
    return PutDatasetPkRefresh500ApplicationJson;
}(SpeakeasyBase));
export { PutDatasetPkRefresh500ApplicationJson };
var PutDatasetPkRefreshRequest = /** @class */ (function (_super) {
    __extends(PutDatasetPkRefreshRequest, _super);
    function PutDatasetPkRefreshRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPkRefreshPathParams)
    ], PutDatasetPkRefreshRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPkRefreshSecurity)
    ], PutDatasetPkRefreshRequest.prototype, "security", void 0);
    return PutDatasetPkRefreshRequest;
}(SpeakeasyBase));
export { PutDatasetPkRefreshRequest };
var PutDatasetPkRefreshResponse = /** @class */ (function (_super) {
    __extends(PutDatasetPkRefreshResponse, _super);
    function PutDatasetPkRefreshResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutDatasetPkRefreshResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPkRefresh200ApplicationJson)
    ], PutDatasetPkRefreshResponse.prototype, "putDatasetPkRefresh200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPkRefresh401ApplicationJson)
    ], PutDatasetPkRefreshResponse.prototype, "putDatasetPkRefresh401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPkRefresh403ApplicationJson)
    ], PutDatasetPkRefreshResponse.prototype, "putDatasetPkRefresh403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPkRefresh404ApplicationJson)
    ], PutDatasetPkRefreshResponse.prototype, "putDatasetPkRefresh404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPkRefresh422ApplicationJson)
    ], PutDatasetPkRefreshResponse.prototype, "putDatasetPkRefresh422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutDatasetPkRefresh500ApplicationJson)
    ], PutDatasetPkRefreshResponse.prototype, "putDatasetPkRefresh500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutDatasetPkRefreshResponse.prototype, "statusCode", void 0);
    return PutDatasetPkRefreshResponse;
}(SpeakeasyBase));
export { PutDatasetPkRefreshResponse };
