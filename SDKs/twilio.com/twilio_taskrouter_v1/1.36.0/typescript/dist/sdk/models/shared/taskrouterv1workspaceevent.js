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
var TaskrouterV1WorkspaceEvent = /** @class */ (function (_super) {
    __extends(TaskrouterV1WorkspaceEvent, _super);
    function TaskrouterV1WorkspaceEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=actor_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "actorSid", void 0);
    __decorate([
        Metadata({ data: "json, name=actor_type" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "actorType", void 0);
    __decorate([
        Metadata({ data: "json, name=actor_url" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "actorUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=event_data" }),
        __metadata("design:type", Object)
    ], TaskrouterV1WorkspaceEvent.prototype, "eventData", void 0);
    __decorate([
        Metadata({ data: "json, name=event_date" }),
        __metadata("design:type", Date)
    ], TaskrouterV1WorkspaceEvent.prototype, "eventDate", void 0);
    __decorate([
        Metadata({ data: "json, name=event_date_ms" }),
        __metadata("design:type", Number)
    ], TaskrouterV1WorkspaceEvent.prototype, "eventDateMs", void 0);
    __decorate([
        Metadata({ data: "json, name=event_type" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "eventType", void 0);
    __decorate([
        Metadata({ data: "json, name=resource_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "resourceSid", void 0);
    __decorate([
        Metadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "resourceType", void 0);
    __decorate([
        Metadata({ data: "json, name=resource_url" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "resourceUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=source_ip_address" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "sourceIpAddress", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=workspace_sid" }),
        __metadata("design:type", String)
    ], TaskrouterV1WorkspaceEvent.prototype, "workspaceSid", void 0);
    return TaskrouterV1WorkspaceEvent;
}(SpeakeasyBase));
export { TaskrouterV1WorkspaceEvent };
