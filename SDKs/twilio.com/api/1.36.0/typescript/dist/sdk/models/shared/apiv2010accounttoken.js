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
var ApiV2010AccountTokenIceServers = /** @class */ (function (_super) {
    __extends(ApiV2010AccountTokenIceServers, _super);
    function ApiV2010AccountTokenIceServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=credential" }),
        __metadata("design:type", String)
    ], ApiV2010AccountTokenIceServers.prototype, "credential", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ApiV2010AccountTokenIceServers.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=urls" }),
        __metadata("design:type", String)
    ], ApiV2010AccountTokenIceServers.prototype, "urls", void 0);
    __decorate([
        Metadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], ApiV2010AccountTokenIceServers.prototype, "username", void 0);
    return ApiV2010AccountTokenIceServers;
}(SpeakeasyBase));
export { ApiV2010AccountTokenIceServers };
var ApiV2010AccountToken = /** @class */ (function (_super) {
    __extends(ApiV2010AccountToken, _super);
    function ApiV2010AccountToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], ApiV2010AccountToken.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", String)
    ], ApiV2010AccountToken.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", String)
    ], ApiV2010AccountToken.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=ice_servers", elemType: shared.ApiV2010AccountTokenIceServers }),
        __metadata("design:type", Array)
    ], ApiV2010AccountToken.prototype, "iceServers", void 0);
    __decorate([
        Metadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], ApiV2010AccountToken.prototype, "password", void 0);
    __decorate([
        Metadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], ApiV2010AccountToken.prototype, "ttl", void 0);
    __decorate([
        Metadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], ApiV2010AccountToken.prototype, "username", void 0);
    return ApiV2010AccountToken;
}(SpeakeasyBase));
export { ApiV2010AccountToken };
