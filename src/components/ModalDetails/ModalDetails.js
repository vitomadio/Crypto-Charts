import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ButtonGroup } from 'reactstrap';
import LineChart from '../LineChart/LineChart';
import ToolTip from '../ToolTip/ToolTip';
import InfoBox from '../InfoBox/InfoBox';

const ModalDetails = (props) => {

  const pair = props.props.pair;
  return (
    <Modal
      isOpen={props.props.modal}
      toggle={props.toggleModal(null)}
      centered={true}
    >
      <ModalHeader toggle={props.toggleModal(null)} style={{ background: '#eee' }}>
        <img src={pair ? `assets/${pair.path}` : null} alt="cryto-icon"
          style={{ width: 30, height: 30, marginRight: '1rem' }}
          className="d-inline"
        />
        <p style={{ fontSize: 24, color: '#666' }} className="d-inline">
          {pair ? pair.name : null}
        </p>
      </ModalHeader>
      <ModalBody id="modal-body" className="pt-5 pt-md-3">
        <div className="row justify-content-center align-items-center" >
          <div className="col-md-8 align-self-end" ref={props.modalRef} style={{ background: '#fff', borderRadius: 10 }}>
            {
              props.props.historyData && pair && props.props.lineChartWidth ?
                <div>
                  {props.props.hoverLoc ?
                    <ToolTip
                      hoverLoc={props.props.hoverLoc}
                      activePoint={props.props.activePoint}
                      marginTop={-45}
                      lineClass={"linechart-dashboard"}
                      currency={props.props.currency}
                    /> : null}
                  <LineChart
                    data={props.props.historyData.filter(price => price.pair === pair.pair)}
                    onChartHover={(a, b) => props.handleChartHover(a, b)}
                    svgWidth={props.props.lineChartWidth}
                    svgHeight={props.props.lineChartWidth * .6}
                    makeArea={true}
                    makeAxis={true}
                    makeLabels={true}
                    xLabelSize={30}
                    yLabelSize={props.props.windowWidth < 577 ? 50 : 90}
                    createLine={true}
                    makeActivePoint={true}
                    color="#007bff"
                    strokeWidth={props.props.windowWidth < 577 ? 2 : 3}
                    lineClass={"linechart-dashboard"}
                    currency={props.props.currency}
                    windowWidth={props.props.windowWidth}
                  />
                </div>
                : null
            }
          </div>
          <div className='col-md-4'>
            <div className="row justify-content-center mt-3 mt-md-0">
              <ButtonGroup>
                <Button style={styles.innerBtnGrp}
                  onClick={props.changePairRange('USD')}
                >
                  USD
										</Button>
                <Button style={styles.innerBtnGrp}
                  onClick={props.changePairRange('EUR')}
                >
                  EUR
										</Button>
                <Button style={styles.innerBtnGrp}
                  onClick={props.changePairRange('GBP')}
                >
                  GBP
										</Button>
              </ButtonGroup>
            </div>
            {
              !props.props.fetchingData && pair ?
                <InfoBox
                  currentPrice={true}
                  monthChangeD={true}
                  monthChangeP={true}
                  currency={props.props.currency}
                  pair={pair}
                />
                : null
            }
          </div>
        </div>
      </ModalBody>
      <ModalFooter className="justify-content-center" >
        <ButtonGroup>
          <Button style={styles.innerBtnGrp}
            onClick={props.changeChartRange('Day')}
          >
            Day
										</Button>
          <Button style={styles.innerBtnGrp}
            onClick={props.changeChartRange('Week')}
          >
            Week
										</Button>
          <Button style={styles.innerBtnGrp}
            onClick={props.changeChartRange('Month')}
          >
            Month
										</Button>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  )
}


const styles = {
  innerBtnGrp: {
    background: '#eee',
    color: '#666',
    border: '1px solid #ddd'
  }

}

export default ModalDetails;
