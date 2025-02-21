import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { SourceServer, UpdateSourceServerReplicationTypeRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateSourceServerReplicationTypeCommand,
  serializeAws_restJson1UpdateSourceServerReplicationTypeCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateSourceServerReplicationTypeCommandInput extends UpdateSourceServerReplicationTypeRequest {}
export interface UpdateSourceServerReplicationTypeCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * <p>Updates source server Replication Type by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateSourceServerReplicationTypeCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateSourceServerReplicationTypeCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new UpdateSourceServerReplicationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSourceServerReplicationTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateSourceServerReplicationTypeCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 */
export class UpdateSourceServerReplicationTypeCommand extends $Command<
  UpdateSourceServerReplicationTypeCommandInput,
  UpdateSourceServerReplicationTypeCommandOutput,
  MgnClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSourceServerReplicationTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSourceServerReplicationTypeCommandInput, UpdateSourceServerReplicationTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "UpdateSourceServerReplicationTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSourceServerReplicationTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SourceServer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateSourceServerReplicationTypeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSourceServerReplicationTypeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSourceServerReplicationTypeCommandOutput> {
    return deserializeAws_restJson1UpdateSourceServerReplicationTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
