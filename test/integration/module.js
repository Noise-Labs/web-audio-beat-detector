import { analyze, guess } from '../../src/module';
import bpmOffsetData from '../fixtures/bpm-offset-data.json';
import { loadFixtureAsAudioBuffer } from '../helper/load-fixture';
import tempoData from '../fixtures/tempo-data.json';

describe('web-audio-beat-detector', () => {

    describe('analyze()', () => {

        leche.withData(tempoData, (filename, tempo) => {

            let audioBuffer;

            beforeEach(async function () {
                this.timeout(15000);

                audioBuffer = await loadFixtureAsAudioBuffer(filename);
            });

            it('should analyze the tempo of the file', async function () {
                this.timeout(15000);

                expect(await analyze(audioBuffer)).to.deep.equal(tempo);
            });

        });

        describe('with a file without detectable beats', () => {

            let audioBuffer;

            beforeEach(async function () {
                this.timeout(15000);

                audioBuffer = await loadFixtureAsAudioBuffer('tombo-piano.wav');
            });

            it('should throw an error', function (done) {
                this.timeout(15000);

                analyze(audioBuffer)
                    .catch((err) => {
                        expect(err.message).to.equal('The given channelData does not contain any detectable beats.');

                        done();
                    });
            });

        });

    });

    describe('guess()', () => {

        leche.withData(bpmOffsetData, (filename, bpm, offset) => {

            let audioBuffer;

            beforeEach(async function () {
                this.timeout(15000);

                audioBuffer = await loadFixtureAsAudioBuffer(filename);
            });

            it('should guess the bpm and the offset of the file', async function () {
                this.timeout(15000);

                expect(await guess(audioBuffer)).to.deep.equal({ bpm, offset });
            });

        });

        describe('with a file without detectable beats', () => {

            let audioBuffer;

            beforeEach(async function () {
                this.timeout(15000);

                audioBuffer = await loadFixtureAsAudioBuffer('tombo-piano.wav');
            });

            it('should throw an error', function (done) {
                this.timeout(15000);

                guess(audioBuffer)
                    .catch((err) => {
                        expect(err.message).to.equal('The given channelData does not contain any detectable beats.');

                        done();
                    });
            });

        });

    });

});
